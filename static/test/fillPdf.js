const fs = require('fs');
const {
  drawImage,
  drawLinesOfText,
  drawRectangle,
  drawText,
  PDFArray,
  PDFContentStream,
  PDFDictionary,
  PDFDocument,
  PDFDocumentFactory,
  PDFDocumentWriter,
  PDFIndirectReference,
  PDFName,
  PDFNumber,
  PDFRawStream,
  PDFString
} = require('pdf-lib');

const getAcroFields = pdfDoc => {
  if (!pdfDoc.catalog.getMaybe('AcroForm')) return [];
  const acroForm = pdfDoc.index.lookup(pdfDoc.catalog.get('AcroForm'));

  if (!acroForm.getMaybe('Fields')) return [];
  const acroFields = pdfDoc.index.lookup(acroForm.get('Fields'));

  return acroFields.array.map(pdfDoc.index.lookup);
};

const findAcroFieldByName = (pdfDoc, name) => {
  const acroFields = getAcroFields(pdfDoc);
  return acroFields.find(acroField => {
    const fieldName = acroField.getMaybe('T');
    return !!fieldName && fieldName.string === name;
  });
};

const logAcroFieldNames = pdfDoc => {
  const acroFields = getAcroFields(pdfDoc);
  acroFields.forEach(acroField => {
    console.log(
      'Field Name:',
      acroField.get('T').toString(),
      'Field Type:',
      acroField.get('FT').toString()
    );
  });
};

const fillAcroTextField = (
  pdfDoc,
  acroField,
  fontObject,
  text,
  fontSize = 15
) => {
  const fieldRect = acroField.get('Rect');
  const fieldWidth = fieldRect.get(2).number - fieldRect.get(0).number;
  const fieldHeight = fieldRect.get(3).number - fieldRect.get(1).number;

  const appearanceStream = pdfDoc.register(
    PDFContentStream.of(
      PDFDictionary.from(
        {
          Type: PDFName.from('XObject'),
          Subtype: PDFName.from('Form'),
          BBox: PDFArray.fromArray(
            [
              PDFNumber.fromNumber(0),
              PDFNumber.fromNumber(0),
              PDFNumber.fromNumber(fieldWidth),
              PDFNumber.fromNumber(fieldHeight)
            ],
            pdfDoc.index
          ),
          Resources: PDFDictionary.from(
            {
              Font: PDFDictionary.from(
                {
                  FontObject: fontObject
                },
                pdfDoc.index
              )
            },
            pdfDoc.index
          )
        },
        pdfDoc.index
      ),
      drawLinesOfText(text.split('\n'), {
        x: 2,
        y: fieldHeight - 13,
        font: 'FontObject',
        size: fontSize,
        colorRgb: [0, 0, 0]
      })
    )
  );

  acroField.set('V', PDFString.fromString(text));
  acroField.set('Ff', PDFNumber.fromNumber(1));
  acroField.set(
    'AP',
    PDFDictionary.from({ N: appearanceStream }, pdfDoc.index)
  );
};

const pdfDoc = PDFDocumentFactory.load(fs.readFileSync('./template.pdf'));

// const marioImageBytes = fs.readFileSync('./MarioImage.png');
// const [marioImageRef, marioImageDims] = pdfDoc.embedPNG(marioImageBytes);

// const marioEmblemBytes = fs.readFileSync('./MarioEmblem.png');
// const [marioEmblemRef, marioEmblemDims] = pdfDoc.embedPNG(marioEmblemBytes);

const [FontHelvetica] = pdfDoc.embedStandardFont('Helvetica');

// Have to manually create this.
// Field names can be found using `logAcroFieldNames(pdfDoc)`
const fieldNames = {
  handle: 'HANDLE',
  age: 'AGE',
  // height: 'Height',
  // weight: 'Weight',
  // eyes: 'Eyes',
  // skin: 'Skin',
  // hair: 'Hair',
  // factionSymbolImage: 'Faction Symbol Image',
  // allies: 'Allies',
  // factionName: 'FactionName',
  // backstory: 'Backstory',
  // featuresAndTraits: 'Feat+Traits',
  // treasure: 'Treasure',
  // characterImage: 'CHARACTER IMAGE'
};

const fillInField = (fieldName, text, fontSize) => {
  const field = findAcroFieldByName(pdfDoc, fieldName);
  if (!field) throw new Error(`Missing AcroField: ${fieldName}`);
  fillAcroTextField(pdfDoc, field, FontHelvetica, text, fontSize);
};

fillInField(fieldNames.handle, 'Cyboman');
fillInField(fieldNames.age, '21');
// fillInField(fieldNames.height, `5' 1"`);
// fillInField(fieldNames.weight, '196 lbs');
// fillInField(fieldNames.eyes, 'blue');
// fillInField(fieldNames.skin, 'white');
// fillInField(fieldNames.hair, 'brown');

// fillInField(
//   fieldNames.backstory,
//   `
//   Mario is a fictional character in the\nMario video game franchise, owned\nby Nintendo and created by\nJapanese video game designer\nShigeru Miyamoto. Serving as the\ncompany's mascot and the\neponymous protagonist of the series,\nMario has appeared in over 200\nvideo games since his creation.\nDepicted as a short, pudgy, Italian\nplumber who resides in the\nMushroom Kingdom, his adventures\ngenerally center upon rescuing\nPrincess Peach from the Koopa \nvillain Bowser. His younger brother\nand sidekick is Luigi.
// `.trim(),
//   10
// );

// fillInField(
//   fieldNames.featuresAndTraits,
//   `
//   Mario can use three basic three power-ups:\n    - the Super Mushroom, which causes Mario to grow larger\n    - the Fire Flower, which allows Mario to throw fireballs\n    - the Starman, which gives Mario temporary invincibility
// `.trim(),
//   10
// );

// fillInField(
//   fieldNames.allies,
//   `
//   Allies:\n    - Princess Daisy\n    - Princess Peach\n    - Rosalina\n    - Geno\n    - Luigi\n    - Donkey Kong\n    - Yoshi\n    - Diddy Kong\n\nOrganizations:\n    - Italian Plumbers Association
// `.trim(),
//   10
// );

// fillInField(fieldNames.factionName, `Mario's Emblem`);

// const contentStream = pdfDoc.register(
//   pdfDoc.createContentStream(
//     drawImage('MarioImage', {
//       x: 50,
//       y: 450,
//       width: marioImageDims.width * 0.6,
//       height: marioImageDims.height * 0.6
//     }),
//     drawImage('MarioEmblem', {
//       x: 447,
//       y: 520,
//       width: marioEmblemDims.width * 0.75,
//       height: marioEmblemDims.height * 0.75
//     })
//   )
// );

const pages = pdfDoc.getPages();

// pages[0]
//   .addImageObject('MarioImage', marioImageRef)
//   .addImageObject('MarioEmblem', marioEmblemRef)
//   .addContentStreams(contentStream);

const pdfBytes = PDFDocumentWriter.saveToBytes(pdfDoc);

fs.writeFileSync('./filled.pdf', pdfBytes);

console.log('Filled-in Template Written To ./filled.pdf');

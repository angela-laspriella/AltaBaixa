import emotion from "../images/Catarina/emotion.png";
import typeface from "../images/Catarina/typeface.png";
import positive from "../images/Catarina/positive.png";
import emotional from "../images/Catarina/emotional.png";
import theApp from "../images/Catarina/theApp.png";

import as from "../images/Catarina/as.png";
import figure1 from "../images/Catarina/figure1.png";
import figure2 from "../images/Catarina/figure2-3.png";
import figure5 from "../images/Catarina/figure5.png";

export const Catarina = [
  {
    text: "typEm — Adapting a Typeface to Text Emotions",
    name: "Catarina Maçãs",
    intro:
      "The introduction of programmatic concepts brought to typography new experiments, concepts, and the possibility to create generative typefaces, capable of adapting to different contexts. <b> This work aims to explore these new creative possibilities in the field of type design. <b> Through the implementation of a generative system, we created a typeface that adapts its shape to the sentiments expressed in a text. In this project, we used the emotional values of each sentence of a given text to deform the typographic glyphs to represent those emotional values. Additionally, and to enable the user to interact with the system, we implemented an application which receives a text as input and, as output, exports the input text composed with our generative typeface.",

    intro: [
      "The introduction of programmatic concepts brought to typography new experiments, concepts, and the possibility to create generative typefaces, capable of adapting to different contexts.",
      <b>
        This work aims to explore these new creative possibilities in the field
        of type design.
      </b>,
      "Through the implementation of a generative system, we created a typeface that adapts its shape to the sentiments expressed in a text. In this project, we used the emotional values of each sentence of a given text to deform the typographic glyphs to represent those emotional values. Additionally, and to enable the user to interact with the system, we implemented an application which receives a text as input and, as output, exports the input text composed with our generative typeface.",
    ],
    img2: as,
  },
];

export const CatarinaTexto = [
  {
    text: "To obtain the emotions present in the text, we used an external Java library called Synesketch. The classification of the emotions of Synesketch is based on Paul Ekman's research. From his studies, Ekman defined 6 emotions which could be expressed and detected by facial expressions. These 6 emotions can also be extracted from the text: happiness, sadness, anger, fear, disgust, and surprise. To do so, Synesketch uses a method based on the detection of keywords within the text and the application of heuristic rules from dictionaries based on WordNet, emotions, and common abbreviations. For every analysed text, Synesketch returns the weight values for the 6 emotions, the valence (positive or negative), and a general weight value. These weights represent the intensity of an emotion and vary between 0, not intense, and 1, very intense.",
    img: emotion,
  },
  {
    row: "false",
    text: "To represent the text's emotion we apply the following workflow: (i) we divide the text by sentence; (ii) we detect the emotions and valences present in the sentence with the Synesketch library; (iii) we morph the typographic glyphs used in each word, to represent the corresponding valence or emotion; (iv) we compose the text with the resulting glyphs; and (v) we generate a typeface which represents the general emotion described in the text. We opted to analyse each sentence in the text independently because the same text can express several emotions. With this, as the emotions change throughout the text, the typeface adapts and also changes to represent the new emotion value.",
    img: typeface,
    img2: figure1,
    smalltitle: "Figure 1",
    smalltext:
      "Different phases of the glyph construction: (i) skeleton; (ii) base points; (iii) additional equidistant points; (iv) new points; (v) their connection; and (vi) the final glyph.",
  },
  {
    false: "false",
    margin: "false",
    small: "false",

    text: "To comprehend how the typographic skeleton could be deformed to represent the emotions present in a text, we opted to use first the valence (positive or negative) and the general weight of the text. The valence takes two possible values, 1 for positive and 0 for negative. The general weight represents the intensity of a certain emotion or valence, ranging from 0, not very intense, to 1, very intense.",
    img: positive,
    img2: figure2,
    smalltitle: "Figure 2",
    smalltext:
      "Two approaches for the design of of 'a' glyphs of positive valences.",
    smalltitle2: "Figure 3",
    smalltext2:
      "Two approaches for the design of of 'a' glyphs of negative valences.",
  },
  {
    text: "We aimed to distinguish visually the 6 available emotions: happiness, fear, rage, sadness, disgust, and surprise. The concepts behind the shapes of the glyphs are based on the descriptions made by Darwin in “The expression of the emotions in man and animals” about the reactions of the human being to the respective emotion — the way he/she express the emotion, through voice, gestures, or the reactions triggered by certain emotions.",
    img: emotional,
  },
  {
    false: "false",
    margin: "false",
    small: "false",

    text: "The main goal of the application is to guide the user in the creation of a text composed with the generative typeface. As input, the application receives a text, and as output, the application can export (i) a PDF file in which the inserted text is composed with the resulting glyphs and (ii) a typeface in the True Type Format (TTF), representing the overall emotion of the input text. A video exemplifying the interaction with the application can be seen here..",
    img: theApp,
    img2: figure5,
    smalltitle: "Figure 5",
    smalltext:
      "Screenshots of the application. The introduction page (left) and the input page (right).",
    smalltitle2: "Figure 6",
    smalltext2:
      "Screenshots of the application. The text composition page (left) and the typeface page (right).",
  },
];

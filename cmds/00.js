const axios = require('axios');

const fonts = {

    mathsans: {
        a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂",
    j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋",
    s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜",
    J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥",
    S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
    } 
};

const Prefixes = [
  '',
  'hi',
  'hello',
  'salut',
  '', 
];

module.exports = {
  config: {
    name: "salut",
    version: 1.0,
    author: "Aesther",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
      if (!prompt) {
        await message.reply("");
api.sendMessage({ sticker: "387545578037993" }, event.threadID);
api.sendMessage("𝗦𝗮𝗹𝘂𝘁 𝗯𝗿𝗼 🤵 , 𝒄𝒐𝒎𝒎𝒆𝒏𝒕 𝒕𝒖 𝒗𝒂𝒔? 𝗺𝗼𝗶 𝗰'𝗲𝘀𝘁 David Bot 👨‍💻 𝒒𝒖'𝒆𝒔 𝒄𝒆 𝒒𝒖𝒆 𝒋𝒆 𝒑𝒆𝒖𝒙 𝒇𝒂𝒊𝒓𝒆 𝒑𝒐𝒖𝒓 𝒕𝒐𝒊 𝒕𝒂𝒑𝒆   +help ou +Aide pour voir ma liste 𝕕𝕖𝕤 𝕔𝕠𝕞𝕞𝕒𝕟𝕕𝕖s" , event.threadID);
api.setMessageReaction("😒", event.messageID, () => {}, true);
        return;
      }
      const senderID = event.senderID;
      const senderInfo = await api.getUserInfo([senderID]);
      const senderName = senderInfo[senderID].name;
      const response = await axios.get(`https://api.kenliejugarap.com/freegpt4o8k/?question=${encodeURIComponent(prompt)}`);
      const answer = ` 𝑫𝑨𝑽𝑩𝑶𝑻 🌿:\n\n${response.data.response} ✰`;
api.setMessageReaction("✰", event.messageID, () => {}, true);

      //apply const font to each letter in the answer
      let formattedAnswer = "";
      for (let letter of answer) {
        formattedAnswer += letter in fonts.mathsans ? fonts.mathsans[letter] : letter;
      }

      await message.reply(formattedAnswer);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};

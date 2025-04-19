import {visit} from "unist-util-visit";

const underlinePlugin = () => { // transforms __underline__ to <u>underline</u>
  function transformer(tree, file) {
    const source = file.value;
    
    visit(tree, "strong", (node) => {
      const startOg = node.position.start.offset;
      const endOg = node.position.end.offset;

      const strToOperateOn = source.substring(startOg, endOg);
      const wasUnderscores =
        strToOperateOn.startsWith("__") && strToOperateOn.endsWith("__");

      if (wasUnderscores) {
        node.type = "underline";
        node.data = {
          hName: "u",
          hProperties: {}
        };
      }
    });
  }

  return transformer;
};

export default underlinePlugin;
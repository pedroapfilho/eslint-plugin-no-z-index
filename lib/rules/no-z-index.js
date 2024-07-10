export default {
  meta: {
    type: "problem",
    docs: {
      description: "disallow usage of z-* classnames and style={{ zIndex: * }}",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: "code",
    schema: [], // no options
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (
          node.name.name === "className" &&
          node.value.type === "JSXExpressionContainer"
        ) {
          const classNames = node.value.expression.quasis[0].value.raw;
          const regex = /\bz-\d+\b/;
          if (regex.test(classNames)) {
            context.report({
              node,
              message: 'Classname contains a "z-*" value.',
            });
          }
        }
        if (
          node.name.name === "style" &&
          node.value.type === "JSXExpressionContainer"
        ) {
          const styleObject = node.value.expression.properties;
          styleObject.forEach((property) => {
            if (property.key.name === "zIndex") {
              context.report({
                node,
                message: 'Inline style contains a "zIndex" value.',
              });
            }
          });
        }
      },
    };
  },
};

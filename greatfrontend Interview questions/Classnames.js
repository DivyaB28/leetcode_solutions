/**
 *
 * Problem: https://www.greatfrontend.com/questions/javascript/classnames
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  let classes = [];
  [...args].map((ele) => {
    if (!ele) {
      return;
    }

    const argType = typeof ele;

    if (argType === "string" || argType === "number") {
      classes.push(ele);
      return;
    }

    if (Array.isArray(ele)) {
      classes.push(classNames(...ele));
      return;
    }

    if (argType === "object") {
      for (const key in ele) {
        if (Object.hasOwn(ele, key) && ele[key]) {
          classes.push(key);
        }
      }
      return;
    }
  });

  return classes.join(" ");
}

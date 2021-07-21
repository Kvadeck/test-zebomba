import { isString } from 'lodash'

class Helpers {
  static createEl(tagName, attributes, styles, textContent) {
    if (arguments.length < 1) {
      throw new TypeError("Failed to execute 'createElement': 1 argument required, but 0 present.")
    } else if (!isString(tagName)) {
      throw new TypeError("Failed to execute 'createElement': parameter 1 is not of type String.")
    }

    const namespaces = ['http://www.w3.org/1999/xhtml', 'http://www.w3.org/2000/svg', 'http://www.mozilla.org/xbl', 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'http://www.w3.org/1998/Math/MathML']

    let el = null

    for (let i = 0; i < namespaces.length; i++) {
      const namespace = namespaces[i]

      el = document.createElementNS(namespace, tagName)

      if (!(el instanceof HTMLUnknownElement)) {
        break
      }
    }

    if (!el) {
      throw new TypeError("Failed to execute 'createElement': could not create an element.")
    }

    if (attributes instanceof Object) {
      const attributeKeys = Object.keys(attributes)

      attributeKeys.forEach((name) => {
        el.setAttribute(name, String(attributes[name]))
      })
    }

		if (styles instanceof Object) {
			const cssText = []

			for (const name in styles) {
				cssText.push(`${name}: ${styles[name]}`)
			}

			el.setAttribute("style", cssText.join("; "))
			el.style.cssText = cssText.join("; ")
		}

    if (arguments.length > 3) {
			el.textContent = String(textContent)
		}
    return el
  }
}

export default Helpers;

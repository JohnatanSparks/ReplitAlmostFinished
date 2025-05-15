// This utility helps obfuscate JavaScript code for bookmarklets

// Simple obfuscation techniques
export function obfuscateCode(code: string): string {
  // Convert to bookmarklet format first (javascript: prefix)
  let bookmarkletCode = code;
  
  // Replace common function names with randomized ones
  const randomFuncName1 = '_' + Math.random().toString(36).substring(2, 9);
  const randomFuncName2 = '_' + Math.random().toString(36).substring(2, 9);
  const randomFuncName3 = '_' + Math.random().toString(36).substring(2, 9);
  
  bookmarkletCode = bookmarkletCode.replace(/sendToTelegram/g, randomFuncName1);
  bookmarkletCode = bookmarkletCode.replace(/handleNextStep/g, randomFuncName2);
  bookmarkletCode = bookmarkletCode.replace(/state/g, randomFuncName3);
  
  // Use hexadecimal encoding for strings
  const hexEncode = (str: string) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += '\\x' + str.charCodeAt(i).toString(16);
    }
    return result;
  };
  
  // Find and encode string literals
  const stringRegex = /'([^'\\]*(\\.[^'\\]*)*)'/g;
  bookmarkletCode = bookmarkletCode.replace(stringRegex, (match, p1) => {
    return '"' + hexEncode(p1) + '"';
  });
  
  const doubleStringRegex = /"([^"\\]*(\\.[^"\\]*)*)"/g;
  bookmarkletCode = bookmarkletCode.replace(doubleStringRegex, (match, p1) => {
    if (p1.startsWith('\\x')) return match; // Skip already encoded
    return '"' + hexEncode(p1) + '"';
  });
  
  // Add some extra obfuscation layers
  bookmarkletCode = `(function(){var ${randomFuncName3}=0;${bookmarkletCode.replace(/\n/g, '')}})()`;
  
  // Further encode the whole thing with eval and encoded strings
  const encodedFinalCode = encodeURIComponent(bookmarkletCode);
  const evalObfuscated = `javascript:(function(){eval(decodeURIComponent("${encodedFinalCode}"))})()`;
  
  return evalObfuscated;
}
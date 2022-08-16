import jwt_decode from "jwt-decode";

var token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8va2xhYmF0dGVuZGVlcy5oZXJva3VhcHAuY29tL2FwaS9sb2dpbi9Mb2dpbkluZm8iLCJpYXQiOjE2NjA2MzgyNjEsImV4cCI6MTY2MDY0MTg2MSwibmJmIjoxNjYwNjM4MjYxLCJqdGkiOiJwVWlLbjh6dGF3U3BueXppIiwic3ViIjoiOSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJpZCI6Im1lbWJlciIsImVtYWlsIjoibnR3YXJpQGdtYWlsLmNvbSJ9.9JVUV0CStFy2ItV8Xoy1v7umximAfUkZo7R1Vt1VjiI";
var decoded = jwt_decode(token);

console.log(decoded);

/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */

// decode header by passing in options (useful for when you need `kid` to verify a JWT):
// var decodedHeader = jwt_decode(token, { header: true });
// console.log(decodedHeader);

/* prints:
 * { typ: "JWT",
 *   alg: "HS256" }
 */

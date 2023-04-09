import {Maybe} from "true-myth";
import figlet, {type Options} from "figlet";

export function boo(): string {
  return 'Boo!';
}

export function options(): Maybe<Options> {
  return Maybe.just({
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
}

console.log(
  figlet.textSync(boo(), options().unwrapOr({}))
);



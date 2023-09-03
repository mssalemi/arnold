export class Progression {
  // This needs updating
  type: "linear" | "rep";
  increment: number;

  constructor(type: "linear" | "rep", increment: number) {
    this.type = type;
    this.increment = increment;
  }
}

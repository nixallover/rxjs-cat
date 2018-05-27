export class Pet {
  constructor(
    public name: string,
    public type: 'dog' | 'cat' | 'bird',
    public friendliness: number
  ) {}
}

export class Doctor {
  constructor(
    public name: string,
    public title: string,
    public rating: number,
    public fees: number,
    public specialization: string[],
    public city?: string
  ) {}
}

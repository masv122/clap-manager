export default class Base {
  constructor(id, rev) {
    if (!!id) this.id = id;
    if (!!rev) this.rev = rev;
  }
}

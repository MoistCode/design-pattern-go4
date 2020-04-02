class DocumentComposite {
  constructor(title) {
    this.docs = [];

    if (title) {
      this.docs.push(new Document(titlr));
    }
  }

  add(item) {
    this.docs.push(item);
  }

  sign(signature) {
    for(doc of this.docs) {
      doc.sign(signature);
    }
  }
}

const forms = new DocumentComposite();
const pr2Form = new Document('Some document');
const w2Form = new Document('Some other document');

forms.add(pr2Form);
forms.add(w2Form);

forms.sign('Timmy Turner');
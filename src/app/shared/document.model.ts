export class Document {

  public id: string;
  public author_id: string;
  public title: string;
  public text: string;
  public rendered_text: string;
  public has_subdocuments: boolean;
  public links: {
    documents: DocumentHash []
    parent: {id: string, title: string}
  };

  constructor(data = {}) {
    Object.assign(this, data);
  }




}

import { savePDF } from "@progress/kendo-react-pdf";
import "./Form.css";

class DocService {
  createPdf = (html) => {
    savePDF(html, {
      color: "black",
      paperSize: "auto",
      fileName: "CV.pdf",
      margin: 3,
    });
  };
}

const Doc = new DocService();
export default Doc;

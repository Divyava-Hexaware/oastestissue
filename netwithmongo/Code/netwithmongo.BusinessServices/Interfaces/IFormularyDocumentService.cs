using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.BusinessServices.Interfaces
{
    public interface IFormularyDocumentService
    {      
        IEnumerable<FormularyDocument> GetAll();
        FormularyDocument Get(string id);
        FormularyDocument Save(FormularyDocument formularydocument);
        FormularyDocument Update(string id, FormularyDocument formularydocument);
        bool Delete(string id);

    }
}

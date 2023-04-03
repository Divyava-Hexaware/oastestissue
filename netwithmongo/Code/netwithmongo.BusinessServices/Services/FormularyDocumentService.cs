using netwithmongo.BusinessServices.Interfaces;
using netwithmongo.Data.Interfaces;
using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.BusinessServices.Services
{
    public class FormularyDocumentService : IFormularyDocumentService
    {
        readonly IFormularyDocumentRepository _FormularyDocumentRepository;

        public FormularyDocumentService(IFormularyDocumentRepository FormularyDocumentRepository)
        {
           this._FormularyDocumentRepository = FormularyDocumentRepository;
        }
        public IEnumerable<FormularyDocument> GetAll()
        {
            return _FormularyDocumentRepository.GetAll();
        }

        public FormularyDocument Get(string id)
        {
            return _FormularyDocumentRepository.Get(id);
        }

        public FormularyDocument Save(FormularyDocument formularydocument)
        {
            _FormularyDocumentRepository.Save(formularydocument);
            return formularydocument;
        }

        public FormularyDocument Update(string id, FormularyDocument formularydocument)
        {
            return _FormularyDocumentRepository.Update(id, formularydocument);
        }

        public bool Delete(string id)
        {
            return _FormularyDocumentRepository.Delete(id);
        }

    }
}

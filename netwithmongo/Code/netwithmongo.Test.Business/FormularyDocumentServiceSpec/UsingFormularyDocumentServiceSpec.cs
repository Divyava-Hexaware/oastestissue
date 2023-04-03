using NSubstitute;
using netwithmongo.Test.Framework;
using netwithmongo.BusinessServices.Services;
using netwithmongo.Data.Interfaces;

namespace netwithmongo.Test.Business.FormularyDocumentServiceSpec
{
    public abstract class UsingFormularyDocumentServiceSpec : SpecFor<FormularyDocumentService>
    {
        protected IFormularyDocumentRepository _formularydocumentRepository;

        public override void Context()
        {
            _formularydocumentRepository = Substitute.For<IFormularyDocumentRepository>();
            subject = new FormularyDocumentService(_formularydocumentRepository);

        }

    }
}
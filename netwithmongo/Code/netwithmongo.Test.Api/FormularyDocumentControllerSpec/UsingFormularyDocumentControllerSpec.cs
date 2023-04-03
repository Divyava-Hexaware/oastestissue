using NSubstitute;
using netwithmongo.Test.Framework;
using netwithmongo.Api.Controllers;
using netwithmongo.BusinessServices.Interfaces;
using AutoMapper;
using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;


namespace netwithmongo.Test.Api.FormularyDocumentControllerSpec
{
    public abstract class UsingFormularyDocumentControllerSpec : SpecFor<FormularyDocumentController>
    {
        protected IFormularyDocumentService _formularydocumentService;
        protected IMapper _mapper;

        public override void Context()
        {
            _formularydocumentService = Substitute.For<IFormularyDocumentService>();
            _mapper = Substitute.For<IMapper>();
            subject = new FormularyDocumentController(_formularydocumentService,_mapper);

        }

    }
}

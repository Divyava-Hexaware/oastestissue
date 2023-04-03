using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;

namespace netwithmongo.Test.Api.FormularyDocumentControllerSpec
{
    public class When_getting_all_formularydocument : UsingFormularyDocumentControllerSpec
    {
        private ActionResult<IEnumerable<FormularyDocumentDto>> _result;

        private IEnumerable<FormularyDocument> _all_formularydocument;
        private FormularyDocument _formularydocument;

        private IEnumerable<FormularyDocumentDto>  _all_formularydocumentDto;
        private FormularyDocumentDto _formularydocumentDto;
    

        public override void Context()
        {
            base.Context();

            _formularydocument = new FormularyDocument{
                DocumentID = 45,
                FormularyID = "FormularyID",
                RxCUI = "RxCUI",
                Description = "Description",
                DocumentName = "DocumentName",
                LanguageType = "LanguageType",
                GPI = "GPI",
                CreatedDate = new DateTime(),
                DocumentType = "DocumentType"
            };

            _formularydocumentDto = new FormularyDocumentDto{
                    DocumentID = 9,
                    FormularyID = "FormularyID",
                    RxCUI = "RxCUI",
                    Description = "Description",
                    DocumentName = "DocumentName",
                    LanguageType = "LanguageType",
                    GPI = "GPI",
                    CreatedDate = new DateTime(),
                    DocumentType = "DocumentType"
                };

            _all_formularydocument = new List<FormularyDocument> { _formularydocument};
            _formularydocumentService.GetAll().Returns(_all_formularydocument);
            _all_formularydocumentDto  = new List<FormularyDocumentDto> {_formularydocumentDto};
            _mapper.Map<IEnumerable<FormularyDocumentDto>>(_all_formularydocument).Returns( _all_formularydocumentDto);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _formularydocumentService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<FormularyDocumentDto>>();

            List<FormularyDocumentDto> resultList = resultListObject as List<FormularyDocumentDto>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_formularydocumentDto);
        }
    }
}
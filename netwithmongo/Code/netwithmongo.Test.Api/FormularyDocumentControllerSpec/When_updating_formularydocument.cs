using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;
using netwithmongo.BusinessServices.Services;

namespace netwithmongo.Test.Api.FormularyDocumentControllerSpec
{
    public class When_updating_formularydocument : UsingFormularyDocumentControllerSpec
    {
        private ActionResult<FormularyDocumentDto > _result;
        private FormularyDocument _formularydocument;
        private FormularyDocumentDto _formularydocumentDto;

        public override void Context()
        {
            base.Context();

            _formularydocument = new FormularyDocument
            {
                DocumentID = 29,
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
                    DocumentID = 70,
                    FormularyID = "FormularyID",
                    RxCUI = "RxCUI",
                    Description = "Description",
                    DocumentName = "DocumentName",
                    LanguageType = "LanguageType",
                    GPI = "GPI",
                    CreatedDate = new DateTime(),
                    DocumentType = "DocumentType"
            };

            _formularydocumentService.Update(_formularydocument.Id, _formularydocument).Returns(_formularydocument);
            _mapper.Map<FormularyDocumentDto>(_formularydocument).Returns(_formularydocumentDto);
            
        }
        public override void Because()
        {
            _result = subject.Update(_formularydocument.Id, _formularydocument);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _formularydocumentService.Received(1).Update(_formularydocument.Id, _formularydocument);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<FormularyDocumentDto>();

            var resultList = resultListObject as FormularyDocumentDto;

            resultList.ShouldBe(_formularydocumentDto);
        }
    }
}
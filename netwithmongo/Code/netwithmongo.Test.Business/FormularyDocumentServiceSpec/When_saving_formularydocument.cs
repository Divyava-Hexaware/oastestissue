using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using netwithmongo.BusinessEntities.Entities;

namespace netwithmongo.Test.Business.FormularyDocumentServiceSpec
{
    public class When_saving_formularydocument : UsingFormularyDocumentServiceSpec
    {
        private FormularyDocument _result;

        private FormularyDocument _formularydocument;

        public override void Context()
        {
            base.Context();

            _formularydocument = new FormularyDocument
            {
                DocumentID = 80,
                FormularyID = "FormularyID",
                RxCUI = "RxCUI",
                Description = "Description",
                DocumentName = "DocumentName",
                LanguageType = "LanguageType",
                GPI = "GPI",
                CreatedDate = new DateTime(),
                DocumentType = "DocumentType"
            };

            _formularydocumentRepository.Save(_formularydocument).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Save(_formularydocument);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _formularydocumentRepository.Received(1).Save(_formularydocument);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<FormularyDocument>();

            _result.ShouldBe(_formularydocument);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using netwithmongo.BusinessEntities.Entities;

namespace netwithmongo.Test.Business.FormularyDocumentServiceSpec
{
    public class When_getting_all_formularydocument : UsingFormularyDocumentServiceSpec
    {
        private IEnumerable<FormularyDocument> _result;

        private IEnumerable<FormularyDocument> _all_formularydocument;
        private FormularyDocument _formularydocument;

        public override void Context()
        {
            base.Context();

            _formularydocument = new FormularyDocument{
                DocumentID = 44,
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
            _formularydocumentRepository.GetAll().Returns(_all_formularydocument);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _formularydocumentRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<FormularyDocument>>();

            List<FormularyDocument> resultList = _result as List<FormularyDocument>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_formularydocument);
        }
    }
}
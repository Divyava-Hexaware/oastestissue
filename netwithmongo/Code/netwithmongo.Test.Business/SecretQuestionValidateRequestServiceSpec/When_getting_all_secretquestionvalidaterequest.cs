using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using netwithmongo.BusinessEntities.Entities;

namespace netwithmongo.Test.Business.SecretQuestionValidateRequestServiceSpec
{
    public class When_getting_all_secretquestionvalidaterequest : UsingSecretQuestionValidateRequestServiceSpec
    {
        private IEnumerable<SecretQuestionValidateRequest> _result;

        private IEnumerable<SecretQuestionValidateRequest> _all_secretquestionvalidaterequest;
        private SecretQuestionValidateRequest _secretquestionvalidaterequest;

        public override void Context()
        {
            base.Context();

            _secretquestionvalidaterequest = new SecretQuestionValidateRequest{
                UserId = 33,
                SecretQuestionId = 7,
                Answer = "Answer"
            };

            _all_secretquestionvalidaterequest = new List<SecretQuestionValidateRequest> { _secretquestionvalidaterequest};
            _secretquestionvalidaterequestRepository.GetAll().Returns(_all_secretquestionvalidaterequest);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _secretquestionvalidaterequestRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<SecretQuestionValidateRequest>>();

            List<SecretQuestionValidateRequest> resultList = _result as List<SecretQuestionValidateRequest>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_secretquestionvalidaterequest);
        }
    }
}
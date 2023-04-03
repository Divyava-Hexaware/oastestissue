using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using netwithmongo.BusinessEntities.Entities;


namespace netwithmongo.Test.Business.SecretQuestionValidateRequestServiceSpec
{
    public class When_updating_secretquestionvalidaterequest : UsingSecretQuestionValidateRequestServiceSpec
    {
        private SecretQuestionValidateRequest _result;
        private SecretQuestionValidateRequest _secretquestionvalidaterequest;

        public override void Context()
        {
            base.Context();

            _secretquestionvalidaterequest = new SecretQuestionValidateRequest
            {
                UserId = 42,
                SecretQuestionId = 76,
                Answer = "Answer"
            };

            _secretquestionvalidaterequestRepository.Update(_secretquestionvalidaterequest.Id, _secretquestionvalidaterequest).Returns(_secretquestionvalidaterequest);
            
        }
        public override void Because()
        {
            _result = subject.Update(_secretquestionvalidaterequest.Id, _secretquestionvalidaterequest);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _secretquestionvalidaterequestRepository.Received(1).Update(_secretquestionvalidaterequest.Id, _secretquestionvalidaterequest);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<SecretQuestionValidateRequest>();

            _result.ShouldBe(_secretquestionvalidaterequest);
        }
    }
}
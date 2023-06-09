using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using netwithmongo.BusinessEntities.Entities;

namespace netwithmongo.Test.Business.SecretQuestionValidateRequestServiceSpec
{
    public class When_saving_secretquestionvalidaterequest : UsingSecretQuestionValidateRequestServiceSpec
    {
        private SecretQuestionValidateRequest _result;

        private SecretQuestionValidateRequest _secretquestionvalidaterequest;

        public override void Context()
        {
            base.Context();

            _secretquestionvalidaterequest = new SecretQuestionValidateRequest
            {
                UserId = 87,
                SecretQuestionId = 54,
                Answer = "Answer"
            };

            _secretquestionvalidaterequestRepository.Save(_secretquestionvalidaterequest).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Save(_secretquestionvalidaterequest);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _secretquestionvalidaterequestRepository.Received(1).Save(_secretquestionvalidaterequest);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<SecretQuestionValidateRequest>();

            _result.ShouldBe(_secretquestionvalidaterequest);
        }
    }
}
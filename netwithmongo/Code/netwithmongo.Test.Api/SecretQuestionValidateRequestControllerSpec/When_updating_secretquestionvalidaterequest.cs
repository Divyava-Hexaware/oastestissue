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

namespace netwithmongo.Test.Api.SecretQuestionValidateRequestControllerSpec
{
    public class When_updating_secretquestionvalidaterequest : UsingSecretQuestionValidateRequestControllerSpec
    {
        private ActionResult<SecretQuestionValidateRequestDto > _result;
        private SecretQuestionValidateRequest _secretquestionvalidaterequest;
        private SecretQuestionValidateRequestDto _secretquestionvalidaterequestDto;

        public override void Context()
        {
            base.Context();

            _secretquestionvalidaterequest = new SecretQuestionValidateRequest
            {
                UserId = 61,
                SecretQuestionId = 1,
                Answer = "Answer"
            };

            _secretquestionvalidaterequestDto = new SecretQuestionValidateRequestDto{
                    UserId = 6,
                    SecretQuestionId = 73,
                    Answer = "Answer"
            };

            _secretquestionvalidaterequestService.Update(_secretquestionvalidaterequest.Id, _secretquestionvalidaterequest).Returns(_secretquestionvalidaterequest);
            _mapper.Map<SecretQuestionValidateRequestDto>(_secretquestionvalidaterequest).Returns(_secretquestionvalidaterequestDto);
            
        }
        public override void Because()
        {
            _result = subject.Update(_secretquestionvalidaterequest.Id, _secretquestionvalidaterequest);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _secretquestionvalidaterequestService.Received(1).Update(_secretquestionvalidaterequest.Id, _secretquestionvalidaterequest);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<SecretQuestionValidateRequestDto>();

            var resultList = resultListObject as SecretQuestionValidateRequestDto;

            resultList.ShouldBe(_secretquestionvalidaterequestDto);
        }
    }
}
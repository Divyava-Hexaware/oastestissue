using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;

namespace netwithmongo.Test.Api.SecretQuestionValidateRequestControllerSpec
{
    public class When_getting_all_secretquestionvalidaterequest : UsingSecretQuestionValidateRequestControllerSpec
    {
        private ActionResult<IEnumerable<SecretQuestionValidateRequestDto>> _result;

        private IEnumerable<SecretQuestionValidateRequest> _all_secretquestionvalidaterequest;
        private SecretQuestionValidateRequest _secretquestionvalidaterequest;

        private IEnumerable<SecretQuestionValidateRequestDto>  _all_secretquestionvalidaterequestDto;
        private SecretQuestionValidateRequestDto _secretquestionvalidaterequestDto;
    

        public override void Context()
        {
            base.Context();

            _secretquestionvalidaterequest = new SecretQuestionValidateRequest{
                UserId = 17,
                SecretQuestionId = 81,
                Answer = "Answer"
            };

            _secretquestionvalidaterequestDto = new SecretQuestionValidateRequestDto{
                    UserId = 97,
                    SecretQuestionId = 5,
                    Answer = "Answer"
                };

            _all_secretquestionvalidaterequest = new List<SecretQuestionValidateRequest> { _secretquestionvalidaterequest};
            _secretquestionvalidaterequestService.GetAll().Returns(_all_secretquestionvalidaterequest);
            _all_secretquestionvalidaterequestDto  = new List<SecretQuestionValidateRequestDto> {_secretquestionvalidaterequestDto};
            _mapper.Map<IEnumerable<SecretQuestionValidateRequestDto>>(_all_secretquestionvalidaterequest).Returns( _all_secretquestionvalidaterequestDto);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _secretquestionvalidaterequestService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<SecretQuestionValidateRequestDto>>();

            List<SecretQuestionValidateRequestDto> resultList = resultListObject as List<SecretQuestionValidateRequestDto>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_secretquestionvalidaterequestDto);
        }
    }
}
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

namespace netwithmongo.Test.Api.UserresponseControllerSpec
{
    public class When_saving_userresponse : UsingUserresponseControllerSpec
    {
        private ActionResult<UserresponseDto> _result;

        private Userresponse _userresponse;
        private UserresponseDto _userresponseDto;

        public override void Context()
        {
            base.Context();

            _userresponse = new Userresponse
            {
                UserId = 94,
                WritingCode = "WritingCode",
                NameId = "NameId",
                MemberId = "MemberId",
                Member = "Member",
                UserName = "UserName",
                Email = "Email",
                SecretImage = "SecretImage",
                SecretImageAltText = "SecretImageAltText",
                LoginAttempt = 12,
                ResetGuid = "ResetGuid",
                Url = "Url",
                IsValidUser = true,
                Phone = "Phone",
                HasAcceptedEula = true,
                PreferedContactMethod = "PreferedContactMethod",
                PatientId = "PatientId",
                NPN = "NPN",
                Broker = "Broker",
                FirstName = "FirstName",
                LastName = "LastName",
                Agency = "Agency"
            };

            _userresponseDto = new UserresponseDto{
                    UserId = 36,
                    WritingCode = "WritingCode",
                    NameId = "NameId",
                    MemberId = "MemberId",
                    Member = "Member",
                    UserName = "UserName",
                    Email = "Email",
                    SecretImage = "SecretImage",
                    SecretImageAltText = "SecretImageAltText",
                    LoginAttempt = 78,
                    ResetGuid = "ResetGuid",
                    Url = "Url",
                    IsValidUser = false,
                    Phone = "Phone",
                    HasAcceptedEula = true,
                    PreferedContactMethod = "PreferedContactMethod",
                    PatientId = "PatientId",
                    NPN = "NPN",
                    Broker = "Broker",
                    FirstName = "FirstName",
                    LastName = "LastName",
                    Agency = "Agency"
            };

            _userresponseService.Save(_userresponse).Returns(_userresponse);
            _mapper.Map<UserresponseDto>(_userresponse).Returns(_userresponseDto);
        }
        public override void Because()
        {
            _result = subject.Save(_userresponse);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _userresponseService.Received(1).Save(_userresponse);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<UserresponseDto>();

            var resultList = (UserresponseDto)resultListObject;

            resultList.ShouldBe(_userresponseDto);
        }
    }
}


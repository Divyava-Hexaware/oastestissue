using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;

namespace netwithmongo.Test.Api.UserresponseControllerSpec
{
    public class When_getting_all_userresponse : UsingUserresponseControllerSpec
    {
        private ActionResult<IEnumerable<UserresponseDto>> _result;

        private IEnumerable<Userresponse> _all_userresponse;
        private Userresponse _userresponse;

        private IEnumerable<UserresponseDto>  _all_userresponseDto;
        private UserresponseDto _userresponseDto;
    

        public override void Context()
        {
            base.Context();

            _userresponse = new Userresponse{
                UserId = 44,
                WritingCode = "WritingCode",
                NameId = "NameId",
                MemberId = "MemberId",
                Member = "Member",
                UserName = "UserName",
                Email = "Email",
                SecretImage = "SecretImage",
                SecretImageAltText = "SecretImageAltText",
                LoginAttempt = 73,
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
                    UserId = 62,
                    WritingCode = "WritingCode",
                    NameId = "NameId",
                    MemberId = "MemberId",
                    Member = "Member",
                    UserName = "UserName",
                    Email = "Email",
                    SecretImage = "SecretImage",
                    SecretImageAltText = "SecretImageAltText",
                    LoginAttempt = 3,
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

            _all_userresponse = new List<Userresponse> { _userresponse};
            _userresponseService.GetAll().Returns(_all_userresponse);
            _all_userresponseDto  = new List<UserresponseDto> {_userresponseDto};
            _mapper.Map<IEnumerable<UserresponseDto>>(_all_userresponse).Returns( _all_userresponseDto);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _userresponseService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<UserresponseDto>>();

            List<UserresponseDto> resultList = resultListObject as List<UserresponseDto>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_userresponseDto);
        }
    }
}
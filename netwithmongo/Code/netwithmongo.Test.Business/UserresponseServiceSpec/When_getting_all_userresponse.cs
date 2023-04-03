using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using netwithmongo.BusinessEntities.Entities;

namespace netwithmongo.Test.Business.UserresponseServiceSpec
{
    public class When_getting_all_userresponse : UsingUserresponseServiceSpec
    {
        private IEnumerable<Userresponse> _result;

        private IEnumerable<Userresponse> _all_userresponse;
        private Userresponse _userresponse;

        public override void Context()
        {
            base.Context();

            _userresponse = new Userresponse{
                UserId = 75,
                WritingCode = "WritingCode",
                NameId = "NameId",
                MemberId = "MemberId",
                Member = "Member",
                UserName = "UserName",
                Email = "Email",
                SecretImage = "SecretImage",
                SecretImageAltText = "SecretImageAltText",
                LoginAttempt = 52,
                ResetGuid = "ResetGuid",
                Url = "Url",
                IsValidUser = true,
                Phone = "Phone",
                HasAcceptedEula = false,
                PreferedContactMethod = "PreferedContactMethod",
                PatientId = "PatientId",
                NPN = "NPN",
                Broker = "Broker",
                FirstName = "FirstName",
                LastName = "LastName",
                Agency = "Agency"
            };

            _all_userresponse = new List<Userresponse> { _userresponse};
            _userresponseRepository.GetAll().Returns(_all_userresponse);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _userresponseRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<Userresponse>>();

            List<Userresponse> resultList = _result as List<Userresponse>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_userresponse);
        }
    }
}
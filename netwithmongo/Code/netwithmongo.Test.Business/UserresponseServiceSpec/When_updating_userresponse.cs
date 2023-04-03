using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using netwithmongo.BusinessEntities.Entities;


namespace netwithmongo.Test.Business.UserresponseServiceSpec
{
    public class When_updating_userresponse : UsingUserresponseServiceSpec
    {
        private Userresponse _result;
        private Userresponse _userresponse;

        public override void Context()
        {
            base.Context();

            _userresponse = new Userresponse
            {
                UserId = 9,
                WritingCode = "WritingCode",
                NameId = "NameId",
                MemberId = "MemberId",
                Member = "Member",
                UserName = "UserName",
                Email = "Email",
                SecretImage = "SecretImage",
                SecretImageAltText = "SecretImageAltText",
                LoginAttempt = 56,
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

            _userresponseRepository.Update(_userresponse.Id, _userresponse).Returns(_userresponse);
            
        }
        public override void Because()
        {
            _result = subject.Update(_userresponse.Id, _userresponse);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _userresponseRepository.Received(1).Update(_userresponse.Id, _userresponse);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<Userresponse>();

            _result.ShouldBe(_userresponse);
        }
    }
}
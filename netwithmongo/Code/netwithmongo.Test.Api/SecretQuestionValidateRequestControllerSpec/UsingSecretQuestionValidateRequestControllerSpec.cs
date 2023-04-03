using NSubstitute;
using netwithmongo.Test.Framework;
using netwithmongo.Api.Controllers;
using netwithmongo.BusinessServices.Interfaces;
using AutoMapper;
using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;


namespace netwithmongo.Test.Api.SecretQuestionValidateRequestControllerSpec
{
    public abstract class UsingSecretQuestionValidateRequestControllerSpec : SpecFor<SecretQuestionValidateRequestController>
    {
        protected ISecretQuestionValidateRequestService _secretquestionvalidaterequestService;
        protected IMapper _mapper;

        public override void Context()
        {
            _secretquestionvalidaterequestService = Substitute.For<ISecretQuestionValidateRequestService>();
            _mapper = Substitute.For<IMapper>();
            subject = new SecretQuestionValidateRequestController(_secretquestionvalidaterequestService,_mapper);

        }

    }
}

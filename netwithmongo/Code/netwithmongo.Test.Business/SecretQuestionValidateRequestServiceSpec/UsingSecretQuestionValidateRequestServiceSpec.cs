using NSubstitute;
using netwithmongo.Test.Framework;
using netwithmongo.BusinessServices.Services;
using netwithmongo.Data.Interfaces;

namespace netwithmongo.Test.Business.SecretQuestionValidateRequestServiceSpec
{
    public abstract class UsingSecretQuestionValidateRequestServiceSpec : SpecFor<SecretQuestionValidateRequestService>
    {
        protected ISecretQuestionValidateRequestRepository _secretquestionvalidaterequestRepository;

        public override void Context()
        {
            _secretquestionvalidaterequestRepository = Substitute.For<ISecretQuestionValidateRequestRepository>();
            subject = new SecretQuestionValidateRequestService(_secretquestionvalidaterequestRepository);

        }

    }
}
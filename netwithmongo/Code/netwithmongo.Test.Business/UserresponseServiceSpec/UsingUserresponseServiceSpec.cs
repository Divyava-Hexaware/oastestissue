using NSubstitute;
using netwithmongo.Test.Framework;
using netwithmongo.BusinessServices.Services;
using netwithmongo.Data.Interfaces;

namespace netwithmongo.Test.Business.UserresponseServiceSpec
{
    public abstract class UsingUserresponseServiceSpec : SpecFor<UserresponseService>
    {
        protected IUserresponseRepository _userresponseRepository;

        public override void Context()
        {
            _userresponseRepository = Substitute.For<IUserresponseRepository>();
            subject = new UserresponseService(_userresponseRepository);

        }

    }
}
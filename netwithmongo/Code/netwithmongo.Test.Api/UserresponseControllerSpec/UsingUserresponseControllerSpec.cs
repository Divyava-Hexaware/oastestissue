using NSubstitute;
using netwithmongo.Test.Framework;
using netwithmongo.Api.Controllers;
using netwithmongo.BusinessServices.Interfaces;
using AutoMapper;
using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;


namespace netwithmongo.Test.Api.UserresponseControllerSpec
{
    public abstract class UsingUserresponseControllerSpec : SpecFor<UserresponseController>
    {
        protected IUserresponseService _userresponseService;
        protected IMapper _mapper;

        public override void Context()
        {
            _userresponseService = Substitute.For<IUserresponseService>();
            _mapper = Substitute.For<IMapper>();
            subject = new UserresponseController(_userresponseService,_mapper);

        }

    }
}

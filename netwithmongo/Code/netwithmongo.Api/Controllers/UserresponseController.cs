using System.Collections.Generic;
using netwithmongo.BusinessServices.Interfaces;
using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace netwithmongo.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserresponseController : ControllerBase
    {
        readonly IUserresponseService _UserresponseService;
        private readonly IMapper _mapper;
        public UserresponseController(IUserresponseService UserresponseService,IMapper mapper)
        {
            _UserresponseService = UserresponseService;
            _mapper = mapper;
        }

        // GET: api/Userresponse
        [HttpGet]
        public ActionResult<IEnumerable<UserresponseDto>> Get()
        {
            var UserresponseDTOs = _mapper.Map<IEnumerable<UserresponseDto>>(_UserresponseService.GetAll());
            return Ok(UserresponseDTOs);
        }

        [HttpGet("{id}")]
        public ActionResult<UserresponseDto> GetById(string id)
        {
            var UserresponseDTO = _mapper.Map<UserresponseDto>(_UserresponseService.Get(id));
            return Ok(UserresponseDTO);
        }

        [HttpPost]
        public ActionResult<UserresponseDto> Save(Userresponse Userresponse)
        {
            var UserresponseDTOs = _mapper.Map<UserresponseDto>(_UserresponseService.Save(Userresponse));
            return Ok(UserresponseDTOs);
        }

        [HttpPut("{id}")]
        public ActionResult<UserresponseDto> Update([FromRoute] string id, Userresponse Userresponse)
        {
            var UserresponseDTOs = _mapper.Map<UserresponseDto>(_UserresponseService.Update(id, Userresponse));
            return Ok(UserresponseDTOs);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Delete([FromRoute] string id)
        {
            bool res = _UserresponseService.Delete(id);
            return Ok(res);
    }


    }
}

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
    public class SecretQuestionValidateRequestController : ControllerBase
    {
        readonly ISecretQuestionValidateRequestService _SecretQuestionValidateRequestService;
        private readonly IMapper _mapper;
        public SecretQuestionValidateRequestController(ISecretQuestionValidateRequestService SecretQuestionValidateRequestService,IMapper mapper)
        {
            _SecretQuestionValidateRequestService = SecretQuestionValidateRequestService;
            _mapper = mapper;
        }

        // GET: api/SecretQuestionValidateRequest
        [HttpGet]
        public ActionResult<IEnumerable<SecretQuestionValidateRequestDto>> Get()
        {
            var SecretQuestionValidateRequestDTOs = _mapper.Map<IEnumerable<SecretQuestionValidateRequestDto>>(_SecretQuestionValidateRequestService.GetAll());
            return Ok(SecretQuestionValidateRequestDTOs);
        }

        [HttpGet("{id}")]
        public ActionResult<SecretQuestionValidateRequestDto> GetById(string id)
        {
            var SecretQuestionValidateRequestDTO = _mapper.Map<SecretQuestionValidateRequestDto>(_SecretQuestionValidateRequestService.Get(id));
            return Ok(SecretQuestionValidateRequestDTO);
        }

        [HttpPost]
        public ActionResult<SecretQuestionValidateRequestDto> Save(SecretQuestionValidateRequest SecretQuestionValidateRequest)
        {
            var SecretQuestionValidateRequestDTOs = _mapper.Map<SecretQuestionValidateRequestDto>(_SecretQuestionValidateRequestService.Save(SecretQuestionValidateRequest));
            return Ok(SecretQuestionValidateRequestDTOs);
        }

        [HttpPut("{id}")]
        public ActionResult<SecretQuestionValidateRequestDto> Update([FromRoute] string id, SecretQuestionValidateRequest SecretQuestionValidateRequest)
        {
            var SecretQuestionValidateRequestDTOs = _mapper.Map<SecretQuestionValidateRequestDto>(_SecretQuestionValidateRequestService.Update(id, SecretQuestionValidateRequest));
            return Ok(SecretQuestionValidateRequestDTOs);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Delete([FromRoute] string id)
        {
            bool res = _SecretQuestionValidateRequestService.Delete(id);
            return Ok(res);
    }


    }
}

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
    public class FormularyDocumentController : ControllerBase
    {
        readonly IFormularyDocumentService _FormularyDocumentService;
        private readonly IMapper _mapper;
        public FormularyDocumentController(IFormularyDocumentService FormularyDocumentService,IMapper mapper)
        {
            _FormularyDocumentService = FormularyDocumentService;
            _mapper = mapper;
        }

        // GET: api/FormularyDocument
        [HttpGet]
        public ActionResult<IEnumerable<FormularyDocumentDto>> Get()
        {
            var FormularyDocumentDTOs = _mapper.Map<IEnumerable<FormularyDocumentDto>>(_FormularyDocumentService.GetAll());
            return Ok(FormularyDocumentDTOs);
        }

        [HttpGet("{id}")]
        public ActionResult<FormularyDocumentDto> GetById(string id)
        {
            var FormularyDocumentDTO = _mapper.Map<FormularyDocumentDto>(_FormularyDocumentService.Get(id));
            return Ok(FormularyDocumentDTO);
        }

        [HttpPost]
        public ActionResult<FormularyDocumentDto> Save(FormularyDocument FormularyDocument)
        {
            var FormularyDocumentDTOs = _mapper.Map<FormularyDocumentDto>(_FormularyDocumentService.Save(FormularyDocument));
            return Ok(FormularyDocumentDTOs);
        }

        [HttpPut("{id}")]
        public ActionResult<FormularyDocumentDto> Update([FromRoute] string id, FormularyDocument FormularyDocument)
        {
            var FormularyDocumentDTOs = _mapper.Map<FormularyDocumentDto>(_FormularyDocumentService.Update(id, FormularyDocument));
            return Ok(FormularyDocumentDTOs);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Delete([FromRoute] string id)
        {
            bool res = _FormularyDocumentService.Delete(id);
            return Ok(res);
    }


    }
}

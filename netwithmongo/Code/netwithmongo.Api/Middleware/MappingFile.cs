using netwithmongo.BusinessEntities.Entities;
using netwithmongo.Contracts.DTO;
using AutoMapper;
namespace netwithmongo.Api.Middleware
{
public class MappingFile : Profile
{
    public MappingFile()
    {
        // Mapping variables
		CreateMap<FormularyDocument , FormularyDocumentDto>(); 
		CreateMap<SecretQuestionValidateRequest , SecretQuestionValidateRequestDto>(); 
		CreateMap<Userresponse , UserresponseDto>(); 
    }
  }
}

using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.BusinessServices.Interfaces
{
    public interface ISecretQuestionValidateRequestService
    {      
        IEnumerable<SecretQuestionValidateRequest> GetAll();
        SecretQuestionValidateRequest Get(string id);
        SecretQuestionValidateRequest Save(SecretQuestionValidateRequest secretquestionvalidaterequest);
        SecretQuestionValidateRequest Update(string id, SecretQuestionValidateRequest secretquestionvalidaterequest);
        bool Delete(string id);

    }
}

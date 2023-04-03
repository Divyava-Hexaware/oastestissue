using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.Data.Interfaces
{
    public interface ISecretQuestionValidateRequestRepository : IGetAll<SecretQuestionValidateRequest>,IGet<SecretQuestionValidateRequest,string>, ISave<SecretQuestionValidateRequest>, IUpdate<SecretQuestionValidateRequest, string>, IDelete<string>
    {
    }
}

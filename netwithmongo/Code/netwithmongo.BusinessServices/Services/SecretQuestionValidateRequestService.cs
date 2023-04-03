using netwithmongo.BusinessServices.Interfaces;
using netwithmongo.Data.Interfaces;
using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.BusinessServices.Services
{
    public class SecretQuestionValidateRequestService : ISecretQuestionValidateRequestService
    {
        readonly ISecretQuestionValidateRequestRepository _SecretQuestionValidateRequestRepository;

        public SecretQuestionValidateRequestService(ISecretQuestionValidateRequestRepository SecretQuestionValidateRequestRepository)
        {
           this._SecretQuestionValidateRequestRepository = SecretQuestionValidateRequestRepository;
        }
        public IEnumerable<SecretQuestionValidateRequest> GetAll()
        {
            return _SecretQuestionValidateRequestRepository.GetAll();
        }

        public SecretQuestionValidateRequest Get(string id)
        {
            return _SecretQuestionValidateRequestRepository.Get(id);
        }

        public SecretQuestionValidateRequest Save(SecretQuestionValidateRequest secretquestionvalidaterequest)
        {
            _SecretQuestionValidateRequestRepository.Save(secretquestionvalidaterequest);
            return secretquestionvalidaterequest;
        }

        public SecretQuestionValidateRequest Update(string id, SecretQuestionValidateRequest secretquestionvalidaterequest)
        {
            return _SecretQuestionValidateRequestRepository.Update(id, secretquestionvalidaterequest);
        }

        public bool Delete(string id)
        {
            return _SecretQuestionValidateRequestRepository.Delete(id);
        }

    }
}

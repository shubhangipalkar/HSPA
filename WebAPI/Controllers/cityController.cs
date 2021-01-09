using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Logging;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class cityController : ControllerBase
    {
        public cityController(){

        }

        //Get api/city
        [HttpGet("")]
        public IEnumerable<string> GetStrings(){
            return new string[]{"atlanta","new york"};
        }
    }

}

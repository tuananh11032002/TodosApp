using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TodoBackend.Controllers
{
    public class VdController : Controller
    {
        // GET: VdController
        public ActionResult Index()
        {
            return View();
        }

        // GET: VdController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: VdController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: VdController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VdController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: VdController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VdController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: VdController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ninject;
using Ninject.Web.Common;
using Reprocess.Web.App_Start;
using Microsoft.Web.Infrastructure.DynamicModuleHelper;

using Reprocess.Service.Metrics.IService;
using Reprocess.Service.Metrics;
using Ninject.Web.Common.WebHost;
using Reprocess.Data.Metrics.Repository.IRepository;
using Reprocess.Data.Metrics.Repository;
using Reprocess.Data.Users;
using Reprocess.Service.Users;
using Reprocess.Data.RoleRepository;
using Reprocess.Service.RoleService;
using Reprocess.Service.RoutingReprocess;
using Reprocess.Data.RoutingReprocess;
using Reprocess.Service.ErrorCode;
using Reprocess.Data.ErrorCode;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(NinjectConfig), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(NinjectConfig), "Stop")]

namespace Reprocess.Web.App_Start
{
    public static class NinjectConfig
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start()
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }

        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }

        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(kernel);
                RegisterRepositories(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }
        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {           
            kernel.Bind<IReprocessService>().To<ReprocessService>();
            kernel.Bind<IUserRepository>().To<UserRepository>();
            kernel.Bind<IRoleRepository>().To<RoleRepository>();
            kernel.Bind<IRoutingReprocessService>().To<RoutingReprocessService>();
            kernel.Bind<IErrorCodeService>().To<ErrorCodeService>();
        }
        
        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterRepositories(IKernel kernel)
        {
            kernel.Bind<IMetricReprocessRepository>().To<MetricReprocessRepository>();
            kernel.Bind<IUserService>().To<UserService>();
            kernel.Bind<IRoleService>().To<RoleService>();
            kernel.Bind<IRoutingReprocessRepository>().To<RoutingReprocessRepository>();
            kernel.Bind<IErrorCodeRepository>().To<ErrorCodeRepository>();
        }
    }
}
// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    // AUTOMATICALLY SET PUBLIC PERMISSIONS
    try {
      // 1. Find the 'Public' role
      const publicRole = await strapi
        .plugin("users-permissions")
        .service("role")
        .findOne({ type: "public" });

      if (publicRole) {
        // 2. Define the permissions we want to enable (safe-guarding if they exist)
        const permissions = { ...publicRole.permissions };

        // Check if 'api::event' exists in the permission tree
        if (
          permissions["api::event"] &&
          permissions["api::event"].controllers &&
          permissions["api::event"].controllers.event
        ) {
          permissions["api::event"].controllers.event.find.enabled = true;
          permissions["api::event"].controllers.event.findOne.enabled = true;

          // 3. Update the role with the Modified permissions
          await strapi
            .plugin("users-permissions")
            .service("role")
            .updateRole(publicRole.id, { permissions });

          strapi.log.info("✅ Auto-Config: Enabled Public Read Access for Events");
        } else {
          strapi.log.warn(
            "⚠️ Auto-Config: Could not find 'api::event' permissions. Content Type might not exist or name differs."
          );
        }
      }
    } catch (error) {
      strapi.log.error("❌ Auto-Config Error: " + error);
    }
  },
};

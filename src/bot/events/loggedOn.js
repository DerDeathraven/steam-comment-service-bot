/*
 * File: loggedOn.js
 * Project: steam-comment-service-bot
 * Created Date: 09.07.2021 16:26:00
 * Author: 3urobeat
 *
 * Last Modified: 24.05.2023 21:31:29
 * Modified By: 3urobeat
 *
 * Copyright (c) 2021 3urobeat <https://github.com/HerrEurobeat>
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */


const Bot = require("../bot.js");


/**
 * Do some stuff when account is logged in
 */
Bot.prototype._attachSteamLoggedOnEvent = function() {

    this.user.on("loggedOn", () => {

        // Print message and set status to online
        logger("info", `[${this.logPrefix}] Account logged in! Waiting for websession...`, false, true, logger.animation("loading"));
        this.user.setPersona(1); // Set online status

        logger("debug", `[${this.logPrefix}] Public IP of this account: ${this.user.publicIP}`);

    });

};

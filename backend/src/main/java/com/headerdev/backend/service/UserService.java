package com.headerdev.backend.service;

import com.headerdev.backend.model.User;

public interface UserService {

	User save(User user);

	User findByUserName(String userName);

}
package com.headerdev.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.headerdev.backend.dao.UserDao;
import com.headerdev.backend.model.User;
import com.headerdev.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	// @Autowired
	// private PasswordEncoder passwordEncoder;

	public User save(User user) {
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userDao.save(user);
	}

	public User findByUserName(String userName) {
		return userDao.findByUserName(userName);
	}

}